import { NextApiRequest } from 'next';
import createApiHandler from '../../../api/lib/create-api-handler';
import { mockPoll, mockVote } from '../../../mock';
import Vote from '../../../types/Vote';

interface VoteRequest extends NextApiRequest {
  query: {
    voteId: string;
  };
}

interface CreateVoteRequest extends VoteRequest {
  body: Vote['response'];
}

// TODO: Add authentication
const VoteHandler = createApiHandler()
  .get(async (req: VoteRequest, res) => {
    // TODO: get vote
    const vote: Vote = mockVote;
    res.json(vote);
  })
  .delete(async (req: VoteRequest, res) => {
    // TODO: delete vote
    res.json({ success: true });
  });

export default VoteHandler;
