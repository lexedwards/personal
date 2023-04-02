import { SyntaxHighlighter, SyntaxHighlighterProps } from './Highlighter'

export type Language =
  | 'bash'
  | 'jsx'
  | 'json'
  | 'markdown'
  | 'rust'
  | 'typescript'
  | 'yaml'

export interface CodeProps {
  /**
   * Code Block
   */
  children: SyntaxHighlighterProps['children']
  /**
   * Present filename metadata
   */
  fileName?: string
  /**
   * Language present for syntax highlighting
   */
  language: Language
  /**
   * Positive Number, from 1
   */
  startingLine?: number
}

export const Code = ({
  children,
  fileName,
  language,
  startingLine,
}: CodeProps) => {
  return (
    <div>
      {fileName ? (
        <div className="prismjs-meta">
          <span>{fileName}</span>
        </div>
      ) : null}
      <SyntaxHighlighter
        language={language}
        showLineNumbers
        startingLineNumber={startingLine}
        useInlineStyles={false}
        wrapLongLines
      >
        {children}
      </SyntaxHighlighter>
    </div>
  )
}
