import { Box, Heading, Text, Button } from "@chakra-ui/react";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const RegisteredEmployees = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      bg={"#DCDCDC"}
      w="100%"
      h="100vh"
    >
      <Heading
      mt={2}
        textAlign={"center"}
        color={"white"}
        pt={4}
        bg="#20B2AA"
        h={20}
        w="80%"
        borderRadius={10}
      >
        <Text>Funcionários Cadastrados</Text>
      </Heading>
      <Box bg={'#fff'} w="80%" h="80vh" mt={4} borderRadius={10} textAlign={'center'}>
        TESTE
      </Box>
      <Box bg="#20B2AA" borderRadius={10} mt={4} marginBottom={4}>
      <Link to="/register">
        <Button variant="link" p={2} paddingLeft={2} color={'#fff'}>
          <FaArrowLeft style={{ marginRight: '8px' }} />{'Voltar'}
        </Button>
      </Link>
</Box>
    </Box>
  );
};

export default RegisteredEmployees;