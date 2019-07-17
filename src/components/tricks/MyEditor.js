import React from 'react';
import {Editor, EditorState} from 'draft-js';
import 'draft-js/dist/Draft.css';

class MyEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {editorState: EditorState.createEmpty()};
    this.onChange = (editorState) => this.setState({editorState});
    
  }

  _onBoldClick() {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'));
  }

  render() {
    return (
      <div>
      <button onClick={this._onBoldClick.bind(this)}>Bold</button>
        <Editor 
          editorState={this.state.editorState} 
          onChange={this.onChange}
          handleKeyCommand={this.handleKeyCommand}
        />
      </div>
      
    );
  }
}

export default MyEditor;