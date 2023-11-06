export {KubernetesResourceEditor} from './KubernetesResourceEditor';
export {MonacoEditor} from './MonacoEditor';
export const getMonacoEditor = () => import('react-monaco-editor').then(editor => editor.monaco.editor);
