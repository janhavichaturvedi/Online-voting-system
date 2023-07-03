import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { deletePoll, getCurrentPoll } from '../store/actions';

const DeletePollPage = ({ deletePoll, getCurrentPoll, auth, history }) => {
  useEffect(() => {
    // Fetch the current poll to ensure it exists
    getCurrentPoll(pollId);
  }, [getCurrentPoll]);

  const handleDelete = () => {
    // Delete the poll
    deletePoll(pollId, history);
  };

  const { pollId } = props.match.params;

  return (
    <div className="delete-poll">
      <h1>Delete Poll</h1>
      <p>Are you sure you want to delete this poll?</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default connect(null, { deletePoll, getCurrentPoll })(DeletePollPage);
