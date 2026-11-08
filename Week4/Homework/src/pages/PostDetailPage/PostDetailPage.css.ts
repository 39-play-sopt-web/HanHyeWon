import { style } from '@vanilla-extract/css'
import { vars } from '../../styles/theme.css'

export const backButton = style({
  marginBottom: '16px',
  padding: '8px 14px',
  fontSize: '14px',
  border: `1px solid ${vars.colors.border}`,
  borderRadius: '8px',
})

export const card = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  padding: '24px',
  backgroundColor: vars.colors.surface,
  borderRadius: '12px',
})

export const title = style({
  fontSize: '20px',
  fontWeight: 700,
})

export const info = style({
  display: 'flex',
  gap: '8px',
  fontSize: '12px',
  color: vars.colors.gray,
})

export const author = style({
  fontWeight: 600,
  color: vars.colors.point,
})

export const content = style({
  fontSize: '14px',
  lineHeight: 1.6,
  whiteSpace: 'pre-wrap',
})

export const buttons = style({
  display: 'flex',
  justifyContent: 'flex-end',
  gap: '8px',
  paddingTop: '16px',
  borderTop: `1px solid ${vars.colors.border}`,
})

export const button = style({
  padding: '8px 14px',
  fontSize: '14px',
  border: `1px solid ${vars.colors.border}`,
  borderRadius: '8px',
})
