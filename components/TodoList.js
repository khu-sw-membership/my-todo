import { Container, Flex, Heading } from "@chakra-ui/react";
import { Draggable } from "react-beautiful-dnd-next";

function TodoList({ todos }) {
  return (
    <Container p={0}>
      {todos.map((todo, index) => (
        <Draggable key={todo.id} draggableId={todo.id} index={index}>
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
            >
              <Flex mt={2} bgColor="white" p={2} rounded={4}>
                <Heading as="h4" size="md" color="gray.700">
                  {todo.msg}
                </Heading>
              </Flex>
            </div>
          )}
        </Draggable>
      ))}
    </Container>
  );
}

export default TodoList;
