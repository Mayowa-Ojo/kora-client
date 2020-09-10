export const styles = `
.ql-mention-list-container {
   background: #313742;
   padding: 0;
   border: 2px solid rgba(154, 220, 250, .1);
   border-radius: 3px;
   color: #9ADCFA;
   max-height: 150px;
   min-width: 145px;
   overflow-y: scroll;
}
.ql-mention-list-container ul {
   padding: 5px 0;
}
.ql-mention-list-container ul li {
   padding: 4px 10px;
   cursor: pointer;
}
.ql-mention-list-container ul li:hover {
   background: #292E39;
}
.ql-editor .mention {
   color: wheat;
}
.ql-mention-list-container::-webkit-scrollbar {
   width: 6px;
}
.ql-mention-list-container::-webkit-scrollbar-thumb {
   background: #3498DB;
   border-radius: 20px;
   border: 1px solid #313742;
}
.ql-mention-list-container::-webkit-scrollbar-track {
   background: #313742;
}
.ql-editor.ql-blank::before { 
   color: #9ADCFA !important;
   font-style: normal !important;
}
.ql-editor { 
   color: #9ADCFA !important;
   padding: 16px !important;
   min-height: 132px !important;
}
.ql-snow a { 
   color: wheat !important; 
}
.ql-snow .ql-editor pre.ql-syntax { 
   color: #292E39 !important;
   background-color: wheat !important;
}
.ql-container.ql-snow { 
   border-top: 1px solid rgba(154, 220, 250, 0.1) !important;
   border-bottom: 1px solid rgba(154, 220, 250, 0.1) !important;
   border-left: none !important;
   border-right: none !important;
   background-color: #292E39 !important;
}
.ql-snow .ql-stroke { 
   stroke: #9ADCFA !important; 
}
.ql-snow .ql-fill { 
   fill: #9ADCFA !important; 
}
.ql-snow.ql-toolbar button.add { 
   padding: .25rem .75rem !important;
   background: #313742 !important;
   border-radius: 5px !important;
   width: 3.5rem !important;
   height: 1.7rem !important;
}
.ql-snow.ql-toolbar button.add:hover { 
   border: 2px solid #292E39 !important;
   background: #3B414B !important;
   color: #9ADCFA !important;
}
.ql-snow.ql-toolbar button { 
   border-radius: 3px !important;
   padding: 2px 4px !important;
   margin: 0 .1rem !important;
   border: 2px solid #292E39 !important;
}
.ql-snow.ql-toolbar button:focus { 
   outline: none !important;
}
.ql-snow.ql-toolbar button:hover { 
   border: 2px solid rgba(154, 220, 250, 0.1) !important;
}
.ql-snow.ql-toolbar button.ql-active { 
   border: 2px solid rgba(154, 220, 250, 0.1) !important; 
}
.ql-snow.ql-toolbar button:hover .ql-stroke { 
   stroke: #9ADCFA !important;
}
.ql-snow.ql-toolbar button:focus .ql-stroke { 
   stroke: #9ADCFA !important;
}
.ql-snow.ql-toolbar button:hover .ql-fill { 
   fill: #9ADCFA !important; 
}
.ql-snow.ql-toolbar button:focus .ql-fill { 
   fill: #9ADCFA !important;
}
`