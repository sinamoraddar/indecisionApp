console.log('App.js is running!');

const app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: [],
};
const onFormSubmit=(e)=>{
     e.preventDefault(); 
     const option= e.target.elements.option.value;
    if(option){
        app.options.push(option);
        e.target.elements.option.value='';
        render();
    }
    else{

    }
    }
const removeAll=()=>{
    app.options=[];
    render();
}
const optionLister=()=>{
    
 return app.options.map((option,index)=><li key={index}>{option}</li>);

}
const onMakeDesicion = () =>{
    const randomNumber=Math.floor((Math.random()*app.options.length));
    const randomOption=app.options[randomNumber];
    alert(randomOption)   
}
const appRoot = document.getElementById('app');
const render=()=>{
    const template = (
        <div>
          <h1>{app.title}</h1>
          {app.subtitle && <p>{app.subtitle}</p>}
          <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
          <button disabled={app.options.length===0} onClick={onMakeDesicion}>What should i do?</button>
          <button onClick={removeAll}>Remove all</button>
          <ol>
            {optionLister()}
          </ol>
          <form onSubmit={onFormSubmit}>
              <input type="text" name="option"/>
              <button>Add option</button>
          </form>
        </div>
      );
ReactDOM.render(template,appRoot);
}
render();