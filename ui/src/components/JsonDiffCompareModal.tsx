import { Box, Modal, ModalContent } from "@chakra-ui/react";
import { useContext } from "react";
// @ts-ignore
import ReactJsonViewCompare from "react-json-view-compare";
import { WorkspaceContext } from "../WorkspaceContext";

export default function JsonDiffCompareModal() {
  const { jsonDiff, compareJson } = useContext(WorkspaceContext);

  if (jsonDiff == null) {
    return null;
  }
  return (
    <Modal
      isOpen={true}
      onClose={() => {
        compareJson(null);
      }}
    >
      <ModalContent>
        <Box height={"80vh"} width={"90%"} overflow={"scroll"}>
          <ReactJsonViewCompare
            oldData={jsonDiff?.old}
            newData={jsonDiff?.new}
          />
        </Box>
      </ModalContent>
    </Modal>
  );
}