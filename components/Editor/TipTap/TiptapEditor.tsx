'use client';

import React, { useState, useEffect } from 'react';
import { useEditor, EditorContent, type Editor } from '@tiptap/react';
import { Toolbar } from '@/components/Editor/TipTap/Toolbar';
import { useAppEditorConfig } from '@/hooks/useAppEditorConfig';
import '../styles/editor.css';

const TiptapEditor = ({
  className,
  content,
  onChange,
}: {
  content: string;
  className: string;
  onChange: (richText: string) => void;
}) => {
  const [characterCount, setCharacterCount] = useState(0);
  const [wordCount, setWordCount] = useState(0);
  const { editorConfig } = useAppEditorConfig();
  const editor: Editor | null = useEditor({
    ...editorConfig,
    content,
    editorProps: {
      attributes: {
        class:
          'rounded-md border border-input focus:border-input p-3 min-h-[200px] list-disc pl-5 space-y-2',
      },
      handlePaste: (view, event) => {
        // Get the clipboard data
        const clipboardData = event.clipboardData;
        const pastedText = clipboardData?.getData('text');

        // Insert the plain text content into the editor
        if (pastedText) {
          editor?.commands.insertContent(pastedText);
        }

        return true; // Returning true ensures other handlers don't interfere
      },
    },
    onUpdate({ editor }) {
      const html = editor.getHTML();
      onChange(html);
      // Update counts
      const { characters, words } = editor.storage.characterCount;
      setCharacterCount(characters);
      setWordCount(words);
    },
  });

  useEffect(() => {
    if (editor) {
      const currentContent = editor.getHTML();
      if (currentContent !== content) {
        editor.commands.insertContent(content); // Update only if content has changed
      }
    }
  }, [content]);

  return (
    <div
      className={`tiptap flex min-h-[250px] flex-col justify-stretch ${className}`}
    >
      <Toolbar editor={editor} />
      <EditorContent
        dir="rtl"
        className="mt-2 whitespace-pre-wrap"
        editor={editor}
      />
      <div className="character-count">
        <p>Character Count: {characterCount}</p>
        <p>Word Count: {wordCount}</p>
      </div>
    </div>
  );
};

export default TiptapEditor;