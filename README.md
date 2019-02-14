# hrext07-my-cruddy-app || tone sequencer
Cruddy tone sequencer that contains CRUD functionality for saving and load previously made sequences

Verbose: HTML-and-Javascript-based tone sequencer that plays selected notes at a regular interval, with functionality for saving to local storage, loading and reading from local storage, updating stored sequences and deletion of stored sequences.

## Tasks

### Minimum Viable Product

#### Sub-UI/X
- [ ] Create a data structure to hold a matrix representing notes to play at an interval
- [ ] Utilize Web Audio API's built-in rendering thread coordinate system to create a clock for functions to be executed
- [ ] Create functions that store and interact with matrix data structures in local storage
  - [ ] Creation and saving of sequences to storage
  - [ ] Loading and reading of sequences from storage
  - [ ] Updating of sequences within storage
  - [ ] Deletion of sequences within storage

#### UI/X
- [ ] Build visual elements to represent an existing tone matrix
  - [ ] Have visual elements change appearance on browser events and tone selection
- [ ] Add play and stop buttons that start and stop the audio context clock
  - [ ] Write function that generates raw oscillator tones for selected notes
- [ ] Display text field that allows users to name their sequences
- [ ] Display buttons that execute functions for interacting with local storage (create, read, update, delete)
- [ ] Make a cool logo?!?!?!? :thinking:

#### Remarks
- Writing a new class Tonematrix with a custom constructor will allow for repeatable construction of matrices and references to functions in its prototype
- Audio must be queued and played in a time sensitive manner
  - Javascript's built-in Web Audio API contains methods that allow for generation and playback of raw sine waves as well as well as a time coordinate system to which sounds can be queued
  - Audio sources can be connected to filter objects and gain controls to allow for audio effects

### Stretch Goals

#### Sub-UI/X
- [ ] Create function allowing for extension of current matrix
- [ ] Allow parameterization of time interval at which notes are played
  - [ ] Convert BPM to milliseconds

#### UI/X
- [ ] Hide stuff away in pretty animated drawers when not in use
