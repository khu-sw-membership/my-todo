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
import Board from "../components/Board";
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
          msg: "우유 사오기",
        },
        {
          id: 2,
          msg: "알고리즘 문제 풀기",
        },
      ],
    },
    {
      id: 2,
      title: "진행중인 프로젝트",
      todos: [
        {
          id: 3,
          msg: "투두",
        },
      ],
    },
  ]);

  const [boardId, setBoardId] = useState(3);
  const [todoId, setTodoId] = useState(4);

  function addTodo(boardId, todo) {
    setBoards(
      boards.map((board) => {
        if (board.id === boardId) {
          board.todos.push({
            id: todoId,
            msg: todo,
          });
        }
        return board;
      })
    );
    setTodoId(todoId + 1);
  }

  return (
    <HStack p={4} align="start">
      {boards.map((board) => (
        <Board key={board.id} {...board} addTodo={addTodo} />
      ))}
    </HStack>
  );
}
