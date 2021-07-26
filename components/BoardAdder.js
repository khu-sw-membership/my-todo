import { Box, Button, Flex, Input } from "@chakra-ui/react";
import { useState } from "react";

function BoardAdder({ addBoard }) {
  const [content, setContent] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    addBoard(content);
    setContent("");
  }

  return (
    <Box bgColor="gray.100" p={2} rounded={6}>
      <form onSubmit={handleSubmit}>
        <Flex>
          <Input
            size="md"
            color="gray.700"
            background="gray.50"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <Button ml={3} type="submit">
            +
          </Button>
        </Flex>
      </form>
    </Box>
  );
}

export default BoardAdder;
