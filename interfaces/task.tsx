export interface Task {
  id: string;
  title: string;
  isCompleted: boolean;
  onToggle?: (id: string) => void;
}
