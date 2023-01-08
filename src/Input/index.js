import { useState } from "react";
import { Tooltip } from "antd";
import { Input } from "antd";
import { Col, Row } from "antd";

const CustomInput = ({ addToDo }) => {
	const [text, setText] = useState("");
	const handleClick = () => {
		addToDo(text)
		setText('')
	}

	return (
		<>
			<Row>
				<Tooltip placement="right" title="Нажмите enter">
					<Col offset={5} span={14}>
						<Input
							maxLength={10}
							placeholder="Enter text"
							onPressEnter={() => handleClick()}
							
							onChange={(e) => setText(e.target.value)}
							value={text}
							
						/>
					</Col>
				</Tooltip>
				{/* <Col>
					<Button
						disabled={false}
						type="ghost"
						onClick={() => addToDo(text)}
					></Button>
				</Col> */}
			</Row>
		</>
	);
};
export default CustomInput;

// import { useState } from "react";

// const Input = ({setTasks, tasks}) => {
// const[text, setText] = useState('')
// const handleClick =()=>{
// 	console.log("handleClick");
// 	setTasks([...tasks,{id:tasks.length + 1, title: text}])
// 	setText('')
// }
// 	return (
// 		<>
// 	<input onChange={(e) => setText(e.target.value)} value={text}/>
// 	<button onClick={()=>handleClick()}>add</button>
// 		</>
// 	);
// };
// export default Input;
