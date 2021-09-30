
import React from 'react';
import ReactQuill from "react-quill"
import 'react-quill/dist/quill.snow.css'

class Editor extends React.Component {
    constructor(props) {
        super(props);
        this.state = { editorHtml: "", };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(html) {
        this.setState({ editorHtml: html });
        this.props.onChange(this.state.editorHtml);
    }
    componentDidMount() {
        let dd = this.props.value
        this.setState({ editorHtml: this.props.value })
        debugger
    }

    componentDidUpdate() {
        //  if(this.props.value){
        //     let dd = this.props.value
        //     this.setState({editorHtml: this.props.value})
        //  } 

    }
    render() {
        return (
            <div>
                <ReactQuill
                    onChange={this.handleChange}
                    value={this.state.editorHtml}
                    modules={Editor.modules}
                    formats={Editor.formats}
                    placeholder={this.props.placeholder}
                />
            </div>
        );
    }
}


Editor.modules = {
    toolbar: [
        [{ header: "1" }, { header: "2" }, { font: [] }],
        [{ size: [] }],
        ["bold", "italic", "underline", "strike", "blockquote"],
        [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" }
        ],
        ["link", "image", "video"],
        ["clean"]
    ],
    clipboard: {
        matchVisual: false
    }
};

Editor.formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "video"
];

export default Editor;