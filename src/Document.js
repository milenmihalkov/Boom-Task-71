import React from "react";


class Document extends React.Component {
   
    render() {
        
      const hendleScroll = (event)=>{
        const button = document.querySelector("button");
        if( event.target.scrollTop === (event.target.scrollHeight - event.target.offsetHeight))
        {   
            button.disabled = false;
        }
        }
      return (
        <section>
            <div className="title">{this.props.title}</div>
            <div 
                className="content" 
                style={{ overflow: 'auto', height: '200px', width:'700px' }}
                onScroll={hendleScroll}>
                    {this.props.content}
            </div>
            <div><button disabled>I Agree</button></div>
        </section>
      );
    }
  }

export default Document;