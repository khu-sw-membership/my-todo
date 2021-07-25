import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import TodoAdder from "../components/TodoAdder";
import TodoList from "../components/TodoList";

export default function Home() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      msg: "우유 사오기",
    },
    {
      id: 2,
      msg: "알고리즘 문제 풀기",
    },
  ]);

  var todoId = 3;

  function addTodo(msg) {
    setTodos([
      ...todos,
      {
        id: todoId++,
        msg,
      },
    ]);
  }

  return (
    <Container bgColor="white" p={4} mt={7} rounded={8}>
      <Heading as="h3" size="lg" color="gray.700" p={3}>
        할 일
      </Heading>
      <TodoList todos={todos} />
      <TodoAdder addTodo={addTodo} />
    </Container>
  );
}
