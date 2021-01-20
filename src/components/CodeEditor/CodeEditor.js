import React from 'react';
import AceEditor from 'react-ace';

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";

import classes from './CodeEditor.module.css';

const codeEditor = (props) => {
    return (
        <div className={classes.Container}>
            <AceEditor
                mode="javascript"
                theme="monokai"
                value={props.value}
                onChange={props.codeChanged}
                name="ID of Div"
                editorProps={{ $blockScrolling: true }}
                height="100vh" />
        </div>

    )
};

export default codeEditor;
