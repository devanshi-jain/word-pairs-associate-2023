# Word Pairs Associate Study
<!-- Intro section -->
This app is designed to test memory retention via the presentation of pseudo-abstract associated word pairs. There are two modes, training and testing. In our use case, participants complete the training mode in the evening, and the testing mode in the morning after a nights sleep. 
### Training
In training mode the each word pair is displayed for several seconds, before moving on to the next pair. After viewing all pairs, the participant is then presented with a repeatable training test. In this test the participant is provided with feedback on if their answer is correct. After each test a csv file with the final score, meta information, and participant answers is downloaded. 
### Testing
This mode tests the participant without revealing the correct answer after each entry. The test is not repeatable. At the end of the test a csv file with the final score, meta information, and participant answers is downloaded. 
## How to

### Using the existing app. 
If you would like to use this app as is, you can simply use our existing deployment at: https://ucsdmalhotra.github.io/word-pairs-associate-2023-built/

### Creating your own changes
This app is built using Angular. 
Word pair lists are defined in src/app/word.service.ts

## Legal

This App has been designed and tested for use with a Google Chrome browser on a laptop (not ipad). This App may be changed without notice. If you have any questions, find any bugs, want complementary REDCap forms to collect the results from the App, or want to receive updates about potential changes in the App, then please contact Chris Schmickl at cschmickl@health.ucsd.edu. If possible, please also let us know if you publish results based on this App in a peer-reviewed journal so we can keep a list of references.

This App is for general information purposes only. All information on the Site is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Site. Under no circumstances shall we have any liability to you for any loss or damage of any kind incurred as a result of the use of the Site or reliance on any information provided on the Site. Your use of the Site and your reliance on any information on the Site is solely at your own risk.
