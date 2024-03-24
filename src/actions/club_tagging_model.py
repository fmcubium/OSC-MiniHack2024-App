import torch
import torch.nn as nn
import torch.optim as optim
import spacy
import numpy as np
from torchtext.data import Field, TabularDataset, BucketIterator

# Load spacy model
spacy_en = spacy.load('en_core_web_sm')

# Tokenizer function
def tokenize_en(text):
    return [tok.text for tok in spacy_en.tokenizer(text)]

# Fields for data processing
TEXT = Field(tokenize=tokenize_en, include_lengths=True)
LABEL = Field(sequential=False, use_vocab=False, dtype=torch.float)

# Load your data into a TabularDataset
# Replace 'your_file.csv' with the path to your data file
# The data should have 'major', 'interests', 'about' as columns
datafields = [('major', TEXT), ('interests', TEXT), ('about', TEXT)]
train_data = TabularDataset(
    path='your_file.csv',
    format='csv',
    skip_header=True,
    fields=datafields
)

# Build vocabulary
TEXT.build_vocab(train_data)

# Define the neural network model
class TaggingModel(nn.Module):
    def __init__(self, input_dim, embedding_dim, hidden_dim, output_dim):
        super().__init__()
        self.embedding = nn.Embedding(input_dim, embedding_dim)
        self.rnn = nn.LSTM(embedding_dim, hidden_dim)
        self.fc = nn.Linear(hidden_dim, output_dim)

    def forward(self, text, text_lengths):
        embedded = self.embedding(text)
        packed_embedded = nn.utils.rnn.pack_padded_sequence(embedded, text_lengths)
        packed_output, (hidden, cell) = self.rnn(packed_embedded)
        return self.fc(hidden.squeeze(0))

# Define hyperparameters
INPUT_DIM = len(TEXT.vocab)
EMBEDDING_DIM = 100
HIDDEN_DIM = 256
OUTPUT_DIM = 1

# Initialize the model
model = TaggingModel(INPUT_DIM, EMBEDDING_DIM, HIDDEN_DIM, OUTPUT_DIM)

# Define optimizer and loss function
optimizer = optim.Adam(model.parameters())
criterion = nn.BCEWithLogitsLoss()

# Train the model
def train(model, iterator, optimizer, criterion):
    model.train()
    epoch_loss = 0

    for batch in iterator:
        text, text_lengths = batch.major
        optimizer.zero_grad()
        predictions = model(text, text_lengths).squeeze(1)
        loss = criterion(predictions, batch.label)
        loss.backward()
        optimizer.step()
        epoch_loss += loss.item()

    return epoch_loss / len(iterator)

# Train loop
N_EPOCHS = 5

for epoch in range(N_EPOCHS):
    train_loss = train(model, train_iterator, optimizer, criterion)
    print(f'Epoch: {epoch+1:02}, Train Loss: {train_loss:.3f}')
