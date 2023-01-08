import CustomInput from "./Input";
import Task from "./Task";
import { useState } from "react";
import { List, Row, Col, notification, message } from "antd";

import "./App.css";

const App = () => {
	const [tasks, setTasks] = useState('');

	const addToDo = (text) => {
		const newArr = [
			...tasks,
			{ id: tasks.length + 1, title: text, status: false },
		];
			setTasks(newArr);
			notification.open({
				type:"success",
				message:"Задача добавлена!",
				
			})
	};

	const handleDelete = (id) => {
		console.log("handleDelete");
		const filteredArr = tasks.filter((item) => item.id !== id);
		console.log(filteredArr);
		setTasks(filteredArr);
	};

	const handleEdit = (id, text) => {
		console.log("handleEdit", id, text);
	const	editArr = tasks.map((item) => item.id === id ? {...item, title:text} : item)
		setTasks(editArr)
		message.success("Изменения сохранены")
	};
	const changeStatus = (id) => {
		const newArr = tasks.map(item => item.id === id ? {...item, status:!item.status} : item)
		setTasks(newArr)
		message.success('Выполнено!')
	};

	return (
		<div className="App">
			<h1>Задачи на день: {tasks.length}</h1>
			<CustomInput addToDo={addToDo} tasks={tasks} setTasks={setTasks} />
			<Row>
				<Col offset={5} span={14}>
					<List
						 size="small"
						 bordered
						 dataSource={tasks}
						renderItem={(item) => (
							<Task
								
							key={item.id}
							tasks={tasks}
							item={item}
							handleDelete={handleDelete}
							handleEdit={handleEdit}
							changeStatus={changeStatus}
						/>
							
						)}
					/>
					 
				</Col>
			</Row>
		</div>
	);
};

export default App;







/* <Row>
				<Col offset={8} span={8}>
					<List
						size="middle"
						bordered
						dataSource={tasks}
						renderItem={(item) => (
							<List
								size="large"
								bordered
								dataSource={tasks}
								renderItem={(item) => (
									<List.Item
										actions={[
											<a key="list-loadmore-edit"><DeleteOutlined /></a>,
											<a key="list-loadmore-more">more</a>,
										]}
									>
										<Task
											key={item.id}
											tasks={tasks}
											item={item}
											handleDelete={handleDelete}
											handleEdit={handleEdit}
										/>
									</List.Item>
								)}
							/>
						)}
					/>
				</Col>
			</Row> */











// 1 шаг : в компонентe App разбиваем все на логические части(компоненты), это:
// заголовок
// поле ввода
// для добавления кнопок удалить/изменить, с помощью useState создаем массив объектов tasks и проходимся по нему

// import { useState } from "react";
// import Input from "./Input";
// import "./App.css";

// const App = () => {
// const[tasks, setTasks] = useState([{id: 1, title: "todo"}])

// 	return (
// 		<div className="App">
// 			<h1>Какие у тебя планы на день?</h1>
// 		<Input setTasks={setTasks} tasks={tasks}/>
// 		{tasks.map((item)=>(
// 			<div key={item.id}>
// 				<p>{item.title}</p>
// 				<button>del</button>
// 				<button>edit</button>
// 			</div>
// 		))}
// 		</div>
// 	);
// };

// export default App;

// шаг 2 или код который ведет к ошибке
// при нажатии на кнопку "изменить", input  появляется во всех тасках,
// т.к. мы не можем достучаться к каждому таску отдельно

// import Input from "./Input";
// import { useState } from "react";

// import "./App.css";

// const App = () => {
// 	const[tasks, setTasks] = useState([{id:1, title:"name"}])
// 	const[isEdit, setIsEdit] = useState(false)
// 	const handleDelete  = (id) => {
// 		console.log('handleDelete', id);
// 		const filteredArr = tasks.filter((item) => item.id !== id)
// 		console.log(filteredArr);
// 		setTasks([...filteredArr]);
// 	}
// 	const handleEdit = () => {
// 		console.log('handleEdit');
// 	}
// 	return(
// 		<div className="App">
// 			<h1>Какие у тебя планы на день?</h1>
// 			<Input tasks={tasks} setTasks={setTasks}/>
// 			{tasks.map((item)=> (
// 			<div key={item.id}>
// 			{isEdit ? <input/>	: <p>{item.title}</p>}
// 				<button onClick={()=>handleDelete(item.id)}>Удалить</button>
// 				<button onClick={()=>setIsEdit(!isEdit)}> Изменить</button>
// 			</div>
// 			))}
// 		</div>
// 	)
// }
// export default App;

// шаг 3
// выносим в таску в отдельную компоненту, дописываем функцию handleEdit

// const App = () => {
// 	const[tasks, setTasks] = useState([{id: 1, title: 'round 10'}])
// 	const handleDelete = (id) => {
// 		console.log('click');
// 		const filteredArr = tasks.filter((item) => item.id !== id)
// 		setTasks([...filteredArr])
// 	}
// 	const handleEdit = (id, text) => {
// 		console.log('handleEdit', id, text);

// 		const arr = tasks.map((item)=> (item.id === id ? {...item, title: text} : item ))
// 		console.log(arr);
// 		setTasks([...arr])
// 	}
// 	return(
// 		<div className="App">
// 			<h1>What's your plan of  day?</h1>
// 			<Input tasks={tasks} setTasks={setTasks}/>
// 			{tasks.map((item)=> (
// 				<Task key={item.id} item={item} handleDelete={handleDelete} handleEdit={handleEdit}/>
// 			))}
// 		</div>
// 	)
// }

// export default App
