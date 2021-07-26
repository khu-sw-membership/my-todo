import { Box, Container, Heading } from "@chakra-ui/react";
import TodoAdder from "./TodoAdder";
import TodoList from "./TodoList";

function Board({ id, title, todos, addTodo }) {
  return (
    <Box bgColor="gray.100" p={2} rounded={6}>
      <Heading as="h4" size="md" color="gray.700" p={0}>
        {title}
      </Heading>
      <TodoList todos={todos} />
      <TodoAdder boardId={id} addTodo={addTodo} />
    </Box>
  );
}

export default Board;