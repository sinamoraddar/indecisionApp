import React from 'react';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import AddOption from './AddOption';
import OptionModal from './OptionModal';

class IndecisionApp extends React.Component {
    state={
        subtitle : 'Put your life in the hands of a computer',
        options:[],
        selectedOption:undefined
    }
    handleDeleteOption = (option) => {
      this.setState((prevState)=>({
          options: prevState.options.filter((item) => (
            item!=option
          )),
      }))
    };
    handleDeleteOptions = () => {
      this.setState(()=>({options:[]}));
    };
    handlePick = () =>  {
      const randomNumber = Math.floor(Math.random()*this.state.options.length);
      const randomOption = this.state.options[randomNumber];
      this.setState(() => ({
          selectedOption:randomOption
      }));
    };
    handleAddOption = (option) => {
      if(!option){
        return `Enter valid value to add item`;
      }else if(this.state.options.indexOf(option)>-1){
        return `This item already exists`
      }
      this.setState((prevState)=>({options:prevState.options.concat(option)}));
    };
    handleModalButton = () => {
        this.setState(() => ({
            selectedOption:undefined
        }));
    };
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
          <OptionModal handleModalButton={this.handleModalButton} selectedOption={this.state.selectedOption} />
        </div>
      );
    }
  }
  export default IndecisionApp ;