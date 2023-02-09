import React from "react";
import Layout from "@/components/Layout";

//Chakra UI
import {
  FormControl,
  FormLabel,
  Text,
  Button,
  Input,
  Textarea,
  RadioGroup,
  Stack,
  Radio,
  Box,
  Flex,
} from "@chakra-ui/react";

const todonew = () => {
  return (
    <div>
      <Layout>
        <Box mr={10} ml={10}>
          <FormControl>
            <Flex mt={5}>
              <Box w={"100%"}>
                <FormLabel
                  htmlFor="newtodo"
                  fontWeight={"bold"}
                  fontSize={"28px"}
                >
                  NEW TODO
                </FormLabel>
              </Box>
              <Box textAlign={"right"}>
                <Button
                  bg="#95E3F4"
                  type="button"
                  borderRadius="full"
                  variant="outline"
                >
                  Back
                </Button>
              </Box>
            </Flex>
            <Text mb={1} fontWeight={"bold"} fontSize={"24px"}>
              TITLE
            </Text>
            <Input mb={5} type="text" placeholder="Text" />
            <Text mb={1} fontWeight={"bold"} fontSize={"24px"}>
              DETAIL
            </Text>
            <Textarea mb={5} h="192px" placeholder="Text" />
            <Text mb={1} fontWeight={"bold"} fontSize={"24px"}>
              PRIORITY
            </Text>
            <RadioGroup>
              <Stack direction="row" fontSize={"24px"}>
                <Radio value="1">High</Radio>
                <Radio value="2">Middle</Radio>
                <Radio value="3">Low</Radio>
              </Stack>
            </RadioGroup>
            <Box mt={4} textAlign={"right"}>
              <Button mr={3} type="button" borderRadius="full" bg="red.100">
                DRAFT
              </Button>
              <Button
                bg="#40D1F1"
                colorScheme="twitter"
                type="submit"
                borderRadius="full"
              >
                CREATE
              </Button>
            </Box>
          </FormControl>
        </Box>
      </Layout>
    </div>
  );
};

export default todonew;
