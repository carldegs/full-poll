import VoterStatus from './VoterStatus';

interface Voter {
  lastName: string;
  firstName: string;
  email: string;
  mobile: string;
  status: VoterStatus;
  voteId?: string;
}

export default Voter;
