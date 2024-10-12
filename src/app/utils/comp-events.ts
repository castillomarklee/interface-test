/**
 * Logs the id of the content that was clicked to the console.
 *
 * @param {React.MouseEvent} event - The event from the click.
 */
export const handleContentClicks = (event: any) => {
  console.log(event.target.id)
}