import { CloseOutlined } from "@ant-design/icons";
import { Drawer } from "antd";

interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  width?: number;
  title?: string;
  children?: React.ReactNode;
  className?: string;
  placement?: any;
  closable?: boolean;
}

export default function DrawerModal(props: ModalProps) {
  const {
    isOpen,
    onClose,
    width = 100,
    closable,
    title = "",
    children,
    className = "",
    placement = "bottom",
  } = props;
  return (
    <Drawer
      width={width}
      height={"100svh"}
      placement={placement}
      className={`drawer_view ${className}`}
      open={isOpen}
      onClose={onClose}
      title={title}
      closable={closable}
      closeIcon={<CloseOutlined />}
    >
      {children}
    </Drawer>
  );
}
