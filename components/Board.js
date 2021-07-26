import { Box, Container, Heading } from "@chakra-ui/react";
import { DragDropContext, Droppable } from "react-beautiful-dnd-next";
import TodoAdder from "./TodoAdder";
import TodoList from "./TodoList";

function Board({ id, title, todos, addTodo, modifyTodo }) {
  return (
    <Box bgColor="gray.100" p={2} rounded={6}>
      <Heading as="h4" size="md" color="gray.700" p={0}>
        {title}
      </Heading>
      <Droppable droppableId={id}>
        {(provided) => (
          <Box ref={provided.innerRef} {...provided.droppableProps} pt={2}>
            <TodoList todos={todos} modifyTodo={modifyTodo} />
            {provided.placeholder}
          </Box>
        )}
      </Droppable>
      <TodoAdder boardId={id} addTodo={addTodo} />
    </Box>
  );
}

export default Board;
