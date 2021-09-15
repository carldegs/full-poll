import PollQuestion from './PollQuestion';
import Voter from './Voter';

interface Poll {
  id: string;
  title: string;
  description: string;
  questions: Record<string, PollQuestion>;
  voterList: Voter[];
}

export default Poll;
