import { Box, Container, Flex, Heading } from "@chakra-ui/react";
import { Draggable } from "react-beautiful-dnd-next";

function TodoList({ todos }) {
  return (
    <Container p={0}>
      {todos.map((todo, index) => (
        <Draggable key={todo.id} draggableId={todo.id} index={index}>
          {(provided) => (
            <Box ref={provided.innerRef} {...provided.draggableProps} mb={2}>
              <Box
                {...provided.dragHandleProps}
                bgColor="white"
                p={2}
                rounded={4}
              >
                <Heading as="h4" size="md" color="gray.700">
                  {todo.msg}
                </Heading>
              </Box>
            </Box>
          )}
        </Draggable>
      ))}
    </Container>
  );
}

export default TodoList;
