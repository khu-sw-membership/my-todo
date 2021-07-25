import { Container, Flex, Heading } from "@chakra-ui/react";

function TodoList({ todos }) {
  return (
    <Container p={0}>
      {todos.map((todo) => (
        <Flex bgColorm={3} p={3} rounded={4} key={todo.id}>
          <Heading as="h4" size="md" color="gray.700">
            {todo.msg}
          </Heading>
        </Flex>
      ))}
    </Container>
  );
}

export default TodoList;
