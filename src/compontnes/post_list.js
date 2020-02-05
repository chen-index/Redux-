import React, {Component} from 'react';
import { connect } from 'react-redux'
import { loadPostsAction } from '../actions/post_action'

class PostList extends Component {
  constructor(props) {
    super(props);
    console.log(props)
  }

  componentWillMount() {
    this.props.dispatch(loadPostsAction)
  }

  render() {
    const { list } = this.props.post
    const Posts = list.map(post=>{
      return (<li key={post.id}>{post.title}</li>)
    })
    return (
      <div>
        <ul>{ Posts }</ul>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    post: state.post
  }
}
// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//     dispatch1:
//   }
// }

export default connect(mapStateToProps)(PostList);
