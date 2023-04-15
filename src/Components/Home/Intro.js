import {
  Flex,
  Text,
  Show,
  HStack,
  Button,
  useDisclosure,
  Hide,
} from "@chakra-ui/react";
import { UserConsumer } from "../Contexts/userContext";
import React from "react";
import Login from "../Home/Login";
import Register from "../Home/Register";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

function Intro() {
  const {
    isOpen: isLoginOpen,
    onOpen: onLoginOpen,
    onClose: onLoginClose,
  } = useDisclosure();
  const {
    isOpen: isRegisterOpen,
    onOpen: onRegisterOpen,
    onClose: onRegisterClose,
  } = useDisclosure();
  return (
    <UserConsumer>
      {(props) => {
        return (
          <Flex
            mt={4}
            p={4}
            gap="2rem"
            w="50%"
            h="60vh"
            direction="column"
            alignItems="center"
            justifyContent="center"
          >
            <Text
              textAlign="center"
              fontFamily="Poppins"
              fontWeight="700"
              fontSize={{ base: "2xl", lg: "3xl" }}
            >
              {" "}
              
                <span style={{ letterSpacing: "0.3rem" }}>DESIGN</span>
              {" "}
              PROJECT<br></br>
              <br></br>
              <br></br>
              <b>Want to get funding for your project?</b>
              <br></br>
Upload your research proposals to check for<br></br>     efficient plagiarism detection<br></br> &<br></br>    expert peer review.<br></br>
Know if you meet the criteria for getting funded.
              {" "}
            </Text>
            {/* to show forms */}
            <Show below="md">
              {
                <HStack>
                  {/* login */}
                  <Button
                    size="lg"
                    fontSize="1.5rem"
                    onClick={onLoginOpen}
                    colorScheme="red"
                  >
                    Login
                  </Button>
                  <Modal isOpen={isLoginOpen} onClose={onLoginClose}>
                    <ModalOverlay />
                    <ModalContent bg="#171717">
                      <ModalCloseButton />
                      <ModalBody>
                        <Login show="" width="100%" />
                      </ModalBody>

                      <ModalFooter>
                        {/* <Button colorScheme="blue" mr={3} onClick={onLoginClose}>
                        Close
                      </Button> */}
                      </ModalFooter>
                    </ModalContent>
                  </Modal>

                  {/* register */}
                  <Button
                    size="lg"
                    fontSize="1.5rem"
                    onClick={onRegisterOpen}
                    colorScheme="messenger"
                  >
                    Register
                  </Button>
                  <Modal
                    bg="#000"
                    w="100%"
                    isOpen={isRegisterOpen}
                    onClose={onRegisterClose}
                  >
                    <ModalOverlay />
                    <ModalContent bg="#171717">
                      <ModalCloseButton />
                      <ModalBody>
                        <Register show="" width="100%" />
                      </ModalBody>

                      <ModalFooter>
                        {/* <Button
                        colorScheme="blue"
                        mr={3}
                        onClick={onRegisterClose}
                      >
                        Close
                      </Button> */}
                      </ModalFooter>
                    </ModalContent>
                  </Modal>
                </HStack>
              }
            </Show>
          </Flex>
        );
      }}
    </UserConsumer>
  );
}

export default Intro;
