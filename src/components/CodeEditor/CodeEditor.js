import React from 'react';
import "ace-builds";
import AceEditor from 'react-ace';
import LanguageIcn from '../UI/LanguageIcn/LanguageIcn';
import PaletteIcn from '../UI/PaletteIcn/PaletteIcn';

// import 'ace-builds/webpack-resolver';

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";

// code editor options
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/mode-java';
import 'ace-builds/src-noconflict/mode-python';

import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/theme-github';
import 'ace-builds/src-noconflict/theme-twilight';
import 'ace-builds/src-noconflict/theme-xcode';
import 'ace-builds/src-noconflict/theme-solarized_dark';
import 'ace-builds/src-noconflict/theme-terminal';

import classes from './CodeEditor.module.css';

export const languages = [
    'javascript',
    'python',
    'java'
];

export const theme = [
    'monokai',
    'github',
    'twilight',
    'xcode',
    'solarized_dark',
    'terminal'
];

const codeEditor = (props) => {
    let languagesDropdown = (
        languages.map(lang => (
            <option
                key={lang}
                value={lang}
            >
                {lang}
            </option>
        ))
    );

    let themeDropdown = (
        theme.map(th => (
            <option
                key={th}
                value={th}
            >
                {th}
            </option>
        ))
    );

    return (
        <div className={classes.Container}>
            <div className={classes.DropdownContainer}>
                <div className={classes.LanguagesContainer}>
                    <label><LanguageIcn /></label>
                    <select
                        onChange={props.LanguageChanged}
                        value={props.language}>
                        {languagesDropdown}
                    </select>
                </div>

                <div className={classes.ThemeContainer}>
                    <label><PaletteIcn /></label>
                    <select
                        onChange={props.ThemeChanged}
                        value={props.theme}>
                        {themeDropdown}
                    </select>
                </div>
            </div>

            <AceEditor
                mode={props.language}
                theme={props.theme}
                value={props.value}
                onChange={props.codeChanged}
                name="ID of Div"
                editorProps={{ $blockScrolling: true }}
                style={{
                    width: '50%',
                    height: "59vh"
                }} />
        </div>

    )
};

export default codeEditor;
