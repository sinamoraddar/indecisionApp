class IndecisionApp extends React.Component {
  constructor(props){
    super(props);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state={
      subtitle : 'Put your life in the hands of a computer',
      options:[]
    }
  }
  componentDidMount(){
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);
      if(options){
        this.setState(() => (
            {
              options
            }
          )
        );
      }
    } 
    catch (error) {
      //do nothing at all
    }
    
    
  }
  componentDidUpdate(prevProps, prevState){
    if(prevState.options.length!==this.state.options.length)
    {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options',json);
    }

  }
  componentWillUnmount () {
    alert(`componentWillUnmount`)
  }
  
  
  handleDeleteOption(option){
    this.setState((prevState)=>({
        options: prevState.options.filter((item) => (
          item!=option
        )),
    }))
  }
  handleDeleteOptions(){
    this.setState(()=>({options:[]}));
  }
  handlePick() {
    const randomNumber = Math.floor(Math.random()*this.state.options.length);
    const randomOption = this.state.options[randomNumber];
    alert(randomOption);
  }
  handleAddOption(option){
    if(!option){
      return `Enter valid value to add item`;
    }else if(this.state.options.indexOf(option)>-1){
      return `This item already exists`
    }
    this.setState((prevState)=>({options:prevState.options.concat(option)}));
  }
  render () {
    return (
      <div>
        <Header 
        subtitle={this.state.subtitle} />
        <Action 
        handlePick={this.handlePick} 
        hasOptions={this.state.options.length>0} 
        />
        <Options 
        options={this.state.options}
        handleDeleteOptions={this.handleDeleteOptions}
        handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption 
        handleAddOption={this.handleAddOption} 
        />
      </div>
    );
  }
}

const Header = (props) => {
    return (
    <div>
      <h1>
        {props.title}
      </h1>
      {
        props.subtitle
        &&
        <h2>
        {props.subtitle}
        </h2>
      }
    </div>
    );
}
Header.defaultProps = {
  title:'Indecision',
}
const Action = (props) => {
    return (
      <div>
        <button 
        disabled={!props.hasOptions} 
        onClick = {props.handlePick}
        >
          What should I do?
        </button>
      </div>
    );
}
const Options = (props) => {
    return (
      <div>
        <button onClick = {props.handleDeleteOptions}>
          Remove all
        </button>
        {(props.options.length!==0)?props.options.map((option,index) =>(
          <Option 
            key={index} 
            optionText={option} 
            handleDeleteOption={props.handleDeleteOption} 
          />
          )
        ):<p>The options array is empty</p>}
      </div>
    );
}
const Option = (props) => {
  // const handleDeleteOption = () => {
  //   props.handleDeleteOption(props.optionText);
  // }
   return(
    <div>
      <p>Option: {props.optionText}</p>
      <button 
        onClick={()=>{
          props.handleDeleteOption(props.optionText)
        }}
      >
        Remove
      </button>
    </div>
    );
}
class AddOption extends React.Component {
  constructor(props){
    super(props);
    this.handleAddOption=this.handleAddOption.bind(this);
    this.state = {
      error:undefined,
    }
  }
  handleAddOption(e) {
    e.preventDefault();
    const optionInput = e.target.elements.optionInput.value.trim();
    const error = this.props.handleAddOption(optionInput);
    this.setState(()=>({error}));
    if(!error){
      e.target.elements.optionInput.value = '';
    }
  }
  render(){
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit = {this.handleAddOption}>
          <input type="text" name="optionInput" id="optionInput"/>
          <button>
            Add Option
          </button>
        </form>
      </div>
    );
  }
}
ReactDOM.render(<IndecisionApp />,document.getElementById('app'));
