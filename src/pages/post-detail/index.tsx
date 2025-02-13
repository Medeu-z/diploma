import { createTheme } from "@mui/material";
import Layout from "../../app/components/Layout";
import { RoomDetailContent } from "../../features";

export function PostDetailPage() {
  const theme = createTheme();
  return (
    <Layout theme={theme}>
      <RoomDetailContent />
    </Layout>
  );
}
