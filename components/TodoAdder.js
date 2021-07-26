import { Button, Flex, Input } from "@chakra-ui/react";
import { useState } from "react";

function TodoAdder({ boardId, addTodo }) {
  const [content, setContent] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    addTodo(boardId, content);
    setContent("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <Flex p={3} rounded={4}>
        <Input
          size="md"
          color="gray.700"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <Button ml={3} type="submit">
          +
        </Button>
      </Flex>
    </form>
  );
}

export default TodoAdder;
