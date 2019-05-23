class VisibilityToggle extends React.Component{
    constructor(props){
        super(props);
        this.toggleText=this.toggleText.bind(this);
        this.state={
            buttonText:'Show details',
            paragraph : ``
        }
    }
    toggleText(){
        if(this.state.paragraph===''){
            this.setState(()=>{
                    return {
                        buttonText:'Hide details',
                        paragraph:<p>blah blah blah</p>,
                    }
                }
            );
        }
        else{
            this.setState(()=>{
                    return {
                        buttonText:'Show details',
                        paragraph:'',
                    }
                }
            );
        }
    }
    render(){
        return (
            <div>
            <h1>
                Visibility Toggle
            </h1>
            <button onClick={this.toggleText}>
                {this.state.buttonText}
            </button>
            {
                this.state.paragraph
            }
        </div>
        );
    }
}
ReactDOM.render(<VisibilityToggle />,document.getElementById('app'));
