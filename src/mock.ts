import Poll from './types/Poll';
import Vote from './types/Vote';
import VoterStatus from './types/VoterStatus';

export const mockPoll: Poll = {
  id: 'test-id',
  title: 'Test Poll',
  description: 'Poll description here',
  questions: {
    a2515: {
      question: 'Select Board Members',
      // TODO: Change to questionType
      isMultiAnswer: true,
      options: ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'],
      maxAnswers: 2,
      order: 0,
    },
    b4gsd: {
      question: 'Select Pope',
      isMultiAnswer: false,
      order: 1,
    },
  },
  voterList: [
    {
      lastName: 'dela Cruz',
      firstName: 'Juan',
      email: 'email@email.com',
      mobile: '09065555555',
      status: VoterStatus.idle,
    },
    {
      lastName: 'Smith',
      firstName: 'John',
      email: 'email@email.com',
      mobile: '09065555555',
      status: VoterStatus.idle,
    },
  ],
};

export const mockVote: Vote = {
  id: 'test-vote',
  pollId: 'test-id',
  response: {
    a2515: {
      isMultiAnswer: true,
      answer: ['Option 2', 'Option 4'],
    },
    b4gsd: {
      isMultiAnswer: false,
      answer: 'yes',
    },
  },
};
