import uuid from 'uuid';
function todos(state={type:"SHOW_ALL",todos:[]} , action) {
    switch (action.type) {
        case 'ADD_TODO':
            let todos=state.todos.concat(new Object({id:uuid.v4(),text:action.value,completed:false}));
            return Object.assign({},state,{todos:todos});
        case "TOGGLE_TODO":
            todos=state.todos.map((item,idx)=>{if(item.id==action.id){return item.completed=!item.completed,item}else{return item;}});
            return Object.assign({},state,{todos:todos});
        case "SETVISIBI_TODO":
            if(action.showType=="SHOW_ALL"){
                return Object.assign({},state,{type:action.showType});
            }
            if(action.showType=="SHOW_ACTIVE"){
                todos=state.todos.filter((item,idx)=>{if(item.completed==false){return item}});
                return Object.assign({},state,{type:action.showType,todos:todos});
            }
            if(action.showType=="SHOW_COMPLETED"){
                todos=state.todos.filter((item,idx)=>{if(item.completed==true){return item}})
                return Object.assign({},state,{type:action.showType,todos:todos});
            }
        default:
            return state;
    }
}


export default todos;