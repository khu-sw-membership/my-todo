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
import React from "react";

function Todo({ provided, todo }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef();

  return (
    <Box
      {...provided.dragHandleProps}
      bgColor="white"
      p={2}
      rounded={4}
      onClick={onOpen}
    >
      <Heading as="h4" size="md" color="gray.700">
        {todo.msg}
      </Heading>
      <Modal isOpen={isOpen} onClose={onClose} initialFocusRef={initialRef}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody p={4}>
            <FormControl pr={8}>
              <Input ref={initialRef} placeholder="제목" value={todo.msg} />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
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
