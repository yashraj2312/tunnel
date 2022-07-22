import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Box,
} from "@chakra-ui/react";

import { ImFilter } from "assets";
import { useDispatch } from "react-redux";
import { sortBy } from "features/Post/postSlice";

export function Filters() {
  const dispatch = useDispatch();

  return (
    <Box>
      <Menu>
        <MenuButton as={Button} p={2} rightIcon={<ImFilter />}>
          Filters
        </MenuButton>
        <MenuList>
          <MenuItem onClick={() => dispatch(sortBy("trending"))}>
            Trending
          </MenuItem>
          <MenuItem onClick={() => dispatch(sortBy("oldest"))}>
            Oldest
          </MenuItem>
          <MenuItem onClick={() => dispatch(sortBy("recent"))}>
            Recent
          </MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
}
