import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Input,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd-next";
import Board from "../components/Board";
import BoardAdder from "../components/BoardAdder";
import TodoAdder from "../components/TodoAdder";
import TodoList from "../components/TodoList";

export default function Home() {
  const [boards, setBoards] = useState([
    {
      id: 1,
      title: "오늘 할 일",
      todos: [
        {
          id: 1,
          title: "우유 사오기",
          note: "Hello World",
        },
        {
          id: 2,
          title: "알고리즘 문제 풀기",
          note: "",
        },
      ],
    },
    {
      id: 2,
      title: "진행중인 프로젝트",
      todos: [
        {
          id: 3,
          title: "투두",
          note: "",
        },
      ],
    },
  ]);

  const [boardId, setBoardId] = useState(3);
  const [todoId, setTodoId] = useState(4);

  const addTodo = (boardId, content) => {
    setBoards(
      boards.map((board) => {
        if (board.id === boardId) {
          board.todos.push({
            id: todoId,
            ...content,
          });
        }
        return board;
      })
    );
    setTodoId(todoId + 1);
  };

  const modifyTodo = (todoId, content) => {
    const todo = boards
      .map((board) => board.todos)
      .flat()
      .find((todo) => todo.id === todoId);
    for (var key in content) {
      todo[key] = content[key];
    }
    setBoards(boards);
  };

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const sourceBoard = boards.find(
      (board) => board.id == result.source.droppableId
    );
    const destBoard = boards.find(
      (board) => board.id == result.destination.droppableId
    );
    const [removed] = sourceBoard.todos.splice(result.source.index, 1);
    destBoard.todos.splice(result.destination.index, 0, removed);

    setBoards(boards);
  };

  const addBoard = (board) => {
    boards.push({
      id: boardId,
      title: board,
      todos: [],
    });
    setBoardId(boardId + 1);
  };

  const removeBoard = (boardId) => {
    setBoards(boards.filter((board) => board.id !== boardId));
  };

  const removeTodo = (todoId) => {
    setBoards(
      boards.map((board) => {
        return {
          ...board,
          todos: board.todos.filter((todo) => todo.id !== todoId),
        };
      })
    );
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <HStack p={4} align="start">
        {boards.map((board) => (
          <Board
            key={board.id}
            {...board}
            addTodo={addTodo}
            modifyTodo={modifyTodo}
            removeBoard={removeBoard}
            removeTodo={removeTodo}
          />
        ))}
        <BoardAdder addBoard={addBoard} />
      </HStack>
    </DragDropContext>
  );
}
