import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";

function Todo({ provided, todo, modifyTodo }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef();

  const [title, setTitle] = useState(todo.title);

  const openModal = () => {
    setTitle(todo.title);
    onOpen();
  };

  const applyModified = () => {
    modifyTodo(todo.id, { title: title });
    onClose();
  };

  return (
    <Box
      {...provided.dragHandleProps}
      bgColor="white"
      p={2}
      rounded={4}
      onClick={openModal}
    >
      <Heading as="h4" size="md" color="gray.700">
        {todo.title}
      </Heading>
      <Modal isOpen={isOpen} onClose={onClose} initialFocusRef={initialRef}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody p={4}>
            <FormControl pr={8}>
              <Input
                ref={initialRef}
                placeholder="제목"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={applyModified}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default Todo;
