import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import Message from './Message';
import Segment from './Segment';

const App = () => {
  return (
    <div className="ui container comments">
      <Segment>
        <div className="ui icon header">
          <i className="pdf file outline icon"></i>
          No documents are listed for this customer.
                    </div>
        <div className="ui primary button">Add Document</div>
      </Segment>
      <Segment>
        <h4 class="ui header">For Your Information</h4>
        <p>
          Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
           Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
        </p>
      </Segment>
      <ApprovalCard>
        <CommentDetail
          author={faker.name.firstName()}
          avatar={faker.image.avatar()}
          content={faker.lorem.sentence()}
          timeAgo="Today at 4:45pm"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author={faker.name.firstName()}
          avatar={faker.image.avatar()}
          content={faker.lorem.sentence()}
          timeAgo="Today at 6:00pm"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author={faker.name.firstName()}
          avatar={faker.image.avatar()}
          content={faker.lorem.sentence()}
          timeAgo="Today at 2:15pm"
        />
      </ApprovalCard>
      <Message
        header="Attention!"
        text="We did an update"
      />
    </div>

  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
