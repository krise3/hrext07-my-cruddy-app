# hrext07-my-cruddy-app || tone sequencer
Cruddy tone sequencer that contains CRUD functionality for saving and load previously made sequences

Verbose: HTML-and-Javascript-based tone sequencer that plays selected notes at a regular interval, with functionality for saving to local storage, loading and reading from local storage, updating stored sequences and deletion of stored sequences.

## Tasks

### Minimum Viable Product

#### Sub-UI/X
- [ ] Create a data structure to hold a matrix representing notes to play at an interval
- [ ] Create a function that iterates through the matrix and executes instructions based on the condition of an element
- [ ] Create functions that store and interact with matrix data structures in local storage
  - [ ] Creation and saving of sequences to storage
  - [ ] Loading and reading of sequences from storage
  - [ ] Updating of sequences within storage
  - [ ] Deletion of sequences within storage

#### UI/X
- [ ] Build visual elements to represent an existing tone matrix
  - [ ] Have visual elements change appearance on browser events and tone selection
- [ ] Play sounds when internal function iterates through matrix 
- [ ] Display text field that allows users to name their sequences
- [ ] Display buttons that execute functions for interacting with local storage (create, read, update, delete
- [ ] Make a cool logo?!?!?!? :thinking:

#### Remarks
- Writing a new class Tonematrix with a custom constructor will allow for repeatable construction of matrices and references to functions in its prototype
- Audio may potentially be played through the use of the HTMLAudioElement object
  - Play duration and changes may be parameterized by the use of HTMLAudioElement's methods

### Stretch Goals

#### Sub-UI/X
- [ ] Create function allowing for extension of current matrix
- [ ] Allow parameterization of time interval at which notes are played
  - [ ] Convert BPM to milliseconds
- [ ] Create a function allowing for users to add their own sounds from a source the user specifies

#### UI/X
- [ ] Hide stuff away in pretty animated drawers when not in use
