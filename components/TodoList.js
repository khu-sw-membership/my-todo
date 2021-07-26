import { Box, Container, Flex, Heading } from "@chakra-ui/react";
import { Draggable } from "react-beautiful-dnd-next";
import Todo from "./Todo";

function TodoList({ todos, modifyTodo }) {
  return (
    <Container p={0}>
      {todos.map((todo, index) => (
        <Draggable key={todo.id} draggableId={todo.id} index={index}>
          {(provided) => (
            <Box ref={provided.innerRef} {...provided.draggableProps} mb={2}>
              <Todo provided={provided} todo={todo} modifyTodo={modifyTodo} />
            </Box>
          )}
        </Draggable>
      ))}
    </Container>
  );
}

export default TodoList;
