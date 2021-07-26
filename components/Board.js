import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { DragDropContext, Droppable } from "react-beautiful-dnd-next";
import TodoAdder from "./TodoAdder";
import TodoList from "./TodoList";

function Board({ id, title, todos, addTodo, modifyTodo, removeBoard }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const onRemoveClick = () => {
    removeBoard(id);
    onClose();
  };

  return (
    <Box bgColor="gray.100" p={2} rounded={6}>
      <Flex direction="row">
        <Heading as="h4" size="md" color="gray.700" p={0} flex="1">
          {title}
        </Heading>
        <Box mr={1} onClick={onOpen}>
          x
        </Box>
      </Flex>
      <Droppable droppableId={id}>
        {(provided) => (
          <Box ref={provided.innerRef} {...provided.droppableProps} pt={2}>
            <TodoList todos={todos} modifyTodo={modifyTodo} />
            {provided.placeholder}
          </Box>
        )}
      </Droppable>
      <TodoAdder boardId={id} addTodo={addTodo} />

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>보드 삭제</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Text>보드({title})가 삭제됩니다. 확실한가요?</Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={onRemoveClick}>
              Yes
            </Button>
            <Button onClick={onClose}>No</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default Board;
