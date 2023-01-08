import { List, Row, Col, Input, Popconfirm, Checkbox } from "antd";
import { useState } from "react";
import { DeleteOutlined, EditOutlined, SaveOutlined } from "@ant-design/icons";

const Task = ({ item, handleDelete, handleEdit, changeStatus }) => {
	const [isEdit, setIsEdit] = useState(false);
	const [text, setText] = useState(item.title);
	const handleClick = () => {
		setIsEdit(!isEdit);
		handleEdit(item.id, text);
	};

	const actions = [
		<Popconfirm
			title="Удаление"
			description="Вы действительно хотите удалить задачу?"
			onConfirm={() => handleDelete(item.id)}
			okText="Да"
			cancelText="Нет"
		>
			<DeleteOutlined />
		</Popconfirm>,
	];

	if (isEdit) {
		actions.push(<SaveOutlined onClick={() => handleClick()} />);
	} else {
		actions.push(<EditOutlined onClick={() => setIsEdit(!isEdit)} />);
	}
	return (
		<div key={item.id}>
			<List.Item actions={actions}>
				<Row>
					<Col>
						{isEdit ? (
							<Input onChange={(e) => setText(e.target.value)} value={text} />
						) : (
							<Checkbox onChange={() => changeStatus(item.id)}>
								{
									item.status ? <p style={{textDecoration:'line-through', margin:0, color:"red"}}>{item.title}</p> :
									<p style={{margin:0}}>{item.title}</p>
								}
								
							</Checkbox>
						)}
					</Col>
				</Row>
			</List.Item>
		</div>
	);
};

export default Task;

// import { useState } from "react";

// const Task = ({ item, handleDelete, handleEdit }) => {
// 	const [isEdit, setIsEdit] = useState(false);
// 	const [text, setText] = useState(item.title);

// 	const toggle = () => {
// 		if (isEdit) {
// 			handleEdit(item.id, text);
// 			setIsEdit(!isEdit);
// 		} else {
// 			setIsEdit(!isEdit);
// 		}
// 	};

// 	return (
// 		<div>
// 			{isEdit ? (
// 				<input onChange={(e) => setText(e.target.value)} value={text} />
// 			) : (
// 				<p>{item.title}</p>
// 			)}
// 			<button onClick={() => handleDelete(item.id)}>Удалить</button>
// 			<button onClick={() => toggle()}>
// 				{isEdit ? "Сохранить" : "Изменить"}
// 			</button>
// 		</div>
// 	);
// };

// export default Task;
